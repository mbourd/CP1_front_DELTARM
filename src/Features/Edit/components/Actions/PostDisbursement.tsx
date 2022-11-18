import React, { useContext, useState, useEffect, useCallback } from 'react';
import { Button, GenericActionModal, Modal } from 'Shared/components';
import { EditValidationContext } from 'Features/Edit';
import { AcceptValidationStyled } from './AcceptValidation.style';
import { getEnv, IUser, security } from 'Services';
import axios from 'axios';

export const PostDisbursement: React.FC = (): React.ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { fileId } = useContext(EditValidationContext);
  const [openFileSelection, setopenFileSelection] = useState(false);
  const [displaySelectedFiles, setdisplaySelectedFiles] = useState(false);
  const [selectedFiles, setselectedFiles] = useState<any>([]);
  const [user] = useState<IUser>(security.getUser());
  const [Adata, setAdata]: any = useState([]);
  const jwt = user.getJwt();

  const new_Adata: any = Adata;

  useEffect(() => {
    axios
      .get(
        `${getEnv('API_PROTOCOL')}://${getEnv(
          'API_HOST',
        )}/file/dec_link_files?file_id=${fileId}`,
        {
          headers: {
            Authorization: jwt,
            'Content-type': 'multipart/form-data',
          },
        },
      )
      .then((response) => {
        setAdata(response?.data?.data);
      })
      .catch((error) => {
        if (error.response) {
          setAdata([]);

          return;
        }
        if (error) {
          setAdata([]);
        }
      });
  }, []);

  useEffect(() => {
    if (new_Adata?.linkable_files?.length > 0) {
      Adata?.linkable_files?.forEach((e: any) => {
        if (e?.file_selected === 1) {
          if (!selectedFiles?.includes(e?.file_uuid)) {
            setselectedFiles((selectedFiles: any) =>
              selectedFiles.concat(e?.file_uuid),
            );
          }
        }
      });
    }
  }, [Adata?.linkable_files, new_Adata]);

  const handleFileSelection = useCallback(() => {
    setopenFileSelection(false);
    if (selectedFiles.length === 0) {
      setdisplaySelectedFiles(false);
      setIsModalOpen(true);
    } else {
      setdisplaySelectedFiles(true);
    }
  }, [selectedFiles]);

  const DisplayFileSelection = async () => {
    setdisplaySelectedFiles(false);
    setIsModalOpen(true);
  };

  const cancelDisplayFileSelection = useCallback(() => {
    setdisplaySelectedFiles(false);
    setopenFileSelection(false);
  }, []);

  const handleSelectionOfFiles = (event: any) => {
    // console.log(event.target.checked);
    if (event.target.checked) {
      if (!selectedFiles?.includes(event.target.value)) {
        setselectedFiles((selectedFiles: any) =>
          selectedFiles.concat(event.target.value),
        );
      }
    } else {
      setselectedFiles((selectedFiles: any) =>
        selectedFiles.filter((f: string) => f !== event.target.value),
      );
    }
  };

  return (
    <>
      <Button
        color={'success'}
        type={'alt'}
        onClick={() => {
          if (new_Adata?.linkable_files?.length > 0) {
            Adata?.linkable_files?.forEach((e: any) => {
              if (e?.file_selected === 1) {
                if (!selectedFiles?.includes(e?.file_uuid)) {
                  setselectedFiles((selectedFiles: any) =>
                    selectedFiles.concat(e?.file_uuid),
                  );
                }
              }
            });
          }
          Adata?.linked_files?.length === 0
            ? setIsModalOpen(!isModalOpen)
            : setopenFileSelection(true);
        }}
      >
        Passer en Post-Décaissement
      </Button>

      <GenericActionModal
        open={
          isModalOpen &&
          openFileSelection === false &&
          displaySelectedFiles === false
        }
        onClose={() => setIsModalOpen(false)}
        fileId={fileId}
        actionLabel={'Passer en Post-Décaissement'}
        successMessage={'Ce dossier a été passé Post-Décaissement'}
        message={'Souhaitez-vous Passer en Post-Décaissement ?'}
        postRouteName={'actionPostDisbursement'}
        body={selectedFiles.length > 0 && { selectedFiles }}
        redirectRouteName={'edit'}
        forceRedirect
      />
      <>
        <Modal
          open={openFileSelection && Adata?.linkable_files?.length !== 0}
          onClose={cancelDisplayFileSelection}
          height={'360px'}
          footer={
            <div className={'footer'}>
              <Button color={'error'} onClick={cancelDisplayFileSelection}>
                Annuler la demande
              </Button>{' '}
              <Button color={'success'} onClick={handleFileSelection}>
                Valider la demande
              </Button>
            </div>
          }
        >
          <AcceptValidationStyled>
            <div className="card-items">
              <h2
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginBottom: 20,
                  marginTop: 0,
                }}
              >{`
              Sélectionner les fichiers à passer en post-décaissement:`}</h2>

              {Adata?.linkable_files?.map((file: any) => {
                return (
                  <div
                    key={file?.file_uuid}
                    style={{
                      flexDirection: 'column',
                      display: 'flex',
                      alignItems: 'start',
                      marginTop: -10,
                    }}
                  >
                    <label
                      style={{
                        flexDirection: 'row',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id={file?.file_uuid}
                        value={file?.file_uuid}
                        onChange={handleSelectionOfFiles}
                        defaultChecked={
                          file?.file_selected === 0 ? false : true
                        }
                      />

                      <b
                        style={{
                          fontSize: 16,
                          fontWeight: 500,
                          cursor: 'pointer',
                        }}
                      >{`${file?.file_name}/${
                        file?.file_avenant
                      } créé le  ${new Date(
                        file?.file_creation_date,
                      ).toLocaleDateString()} par ${
                        file?.file_creation_by
                      }`}</b>
                    </label>
                  </div>
                );
              })}
            </div>
          </AcceptValidationStyled>
        </Modal>
      </>

      <Modal
        open={displaySelectedFiles && selectedFiles.length !== 0}
        onClose={cancelDisplayFileSelection}
        height={'360px'}
        footer={
          <div className={'footer'}>
            <Button color={'error'} onClick={cancelDisplayFileSelection}>
              Annuler
            </Button>{' '}
            <Button color={'success'} onClick={DisplayFileSelection}>
              Confirmer la demande
            </Button>
          </div>
        }
      >
        <AcceptValidationStyled>
          <div className="card-items">
            <h2 style={{ fontSize: 18, fontWeight: 600 }} className="font">
              {selectedFiles.length === 1
                ? "Vous êtes sur le point d'effectuer une demande de post-décaissement pour le dossier:"
                : "Vous êtes sur le point d'effectuer une demande de post-décaissement pour les dossiers:"}
            </h2>
            <div style={{ marginTop: 15 }}>
              {selectedFiles.length > 0 &&
                Adata?.linkable_files
                  .filter(function (item: any) {
                    return selectedFiles.indexOf(item.file_uuid) !== -1;
                  })
                  .map((file: any, index: any) => {
                    return (
                      <>
                        <b
                          style={{
                            fontSize: 16,
                            fontWeight: 500,
                            marginTop: 5,
                            marginBottom: 5,
                          }}
                          key={file?.file_uuid}
                        >{`${index + 1}: ${file?.file_name}/${
                          file?.file_avenant
                        } créé le  ${new Date(
                          file?.file_creation_date,
                        ).toLocaleDateString()} par ${
                          file?.file_creation_by
                        }`}</b>
                        <br />
                      </>
                    );
                  })}
            </div>
            <br />
            <p
              style={{
                fontSize: 16,
                fontWeight: 600,
                marginTop: 20,
              }}
            >{`Souhaitez-vous confirmer cette opération?`}</p>
          </div>
        </AcceptValidationStyled>
      </Modal>
    </>
  );
};
