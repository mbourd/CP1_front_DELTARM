import React, { useContext, useState, useEffect, useCallback } from 'react';
import { Button, GenericActionModal, Modal } from 'Shared/components';
import { EditValidationContext } from 'Features/Edit';
import { AcceptValidationStyled } from './AcceptValidation.style';

export const AcceptValidation: React.FC = (): React.ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { fileId, data } = useContext(EditValidationContext);
  const [openFileSelection, setopenFileSelection] = useState(false);
  const [displaySelectedFiles, setdisplaySelectedFiles] = useState(false);
  const [selectedFiles, setselectedFiles] = useState<any>([]);

  const new_data: any = data;
  useEffect(() => {
    if (new_data?.linked_files?.length > 0) {
      data?.linked_files?.forEach((e: any) => {
        if (e?.file_selected === 1) {
          if (!selectedFiles?.includes(e?.linked_file_id)) {
            setselectedFiles((selectedFiles: any) =>
              selectedFiles.concat(e?.linked_file_id),
            );
          }
        }
      });
    }
  }, [data?.linked_files, new_data]);

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
          if (new_data?.linked_files?.length > 0) {
            data?.linked_files?.forEach((e: any) => {
              if (e?.file_selected === 1) {
                if (!selectedFiles?.includes(e?.linked_file_id)) {
                  setselectedFiles((selectedFiles: any) =>
                    selectedFiles.concat(e?.linked_file_id),
                  );
                }
              }
            });
          }
          data?.linked_files?.length === 0
            ? setIsModalOpen(!isModalOpen)
            : setopenFileSelection(true);
        }}
      >
        Valider le dossier
      </Button>
      <GenericActionModal
        open={
          isModalOpen &&
          openFileSelection === false &&
          displaySelectedFiles === false
        }
        onClose={() => setIsModalOpen(false)}
        fileId={fileId}
        actionLabel={'Valider le dossier'}
        successMessage={'Le dossier a été validé'}
        message={'Merci de renseigner un commentaire de validation :'}
        postRouteName={'actionAcceptValidation'}
        queries={
          data?.validationCount ? { valid_num: data?.validationCount } : {}
        }
        body={selectedFiles.length > 0 && { selectedFiles }}
        comment
        commentParam="accept_comment"
      />

      <>
        <Modal
          open={openFileSelection && data?.linked_files?.length !== 0}
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
              Sélectionner les fichiers à valider: ${data?.number}`}</h2>

              {data?.linked_files?.map((file: any) => {
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
                        id={file?.linked_file_id}
                        value={file?.linked_file_id}
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
                      >{`${file?.file_name}/${file?.file_avenant}`}</b>
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
              Confirmer la validation
            </Button>
          </div>
        }
      >
        <AcceptValidationStyled>
          <div className="card-items">
            <h2 style={{ fontSize: 18, fontWeight: 600 }} className="font">
              {selectedFiles.length === 1
                ? "Vous êtes sur le point d'effectuer une validation d'un fichier. Vous avez demandé de valider les informations du dossier :"
                : "Vous êtes sur le point d'effectuer la validation de plusieurs fichiers. Vous avez demandé de valider les dossiers :"}
            </h2>
            <div style={{ marginTop: 15 }}>
              {selectedFiles.length > 0 &&
                data?.linked_files
                  .filter(function (item: any) {
                    return selectedFiles.indexOf(item.linked_file_id) !== -1;
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
                          key={file?.linked_file_id}
                        >{`${index + 1}: ${file?.file_name}/${
                          file?.file_avenant
                        }`}</b>
                        <br />
                      </>
                    );
                  })}
            </div>
            <br />

            <b
              style={{
                fontSize: 15,
                fontWeight: 500,
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              {selectedFiles.length > 1 &&
                `Si vous confirmez cette validation, toutes les informations que vous avez saisies seront dupliquées entre ces dossiers.`}
            </b>
            <p
              style={{
                fontSize: 16,
                fontWeight: 600,
                marginTop: 20,
              }}
            >{`Souhaitez-vous confirmer cette validation ?`}</p>
          </div>
        </AcceptValidationStyled>
      </Modal>
    </>
  );
};
