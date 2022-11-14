import React, { useContext, useState, useEffect, useCallback } from 'react';
import { Button, GenericActionModal, Modal } from 'Shared/components';
import { EditValidationContext } from 'Features/Edit';
import { AcceptValidationStyled } from './AcceptValidation.style';

export const RejectValidation: React.FC = (): React.ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { fileId, data } = useContext(EditValidationContext);

  const [openFileSelection, setopenFileSelection] = useState(false);
  const [displaySelectedFiles, setdisplaySelectedFiles] = useState(false);
  const [selectedFiles, setselectedFiles] = useState<any>([]);

  const new_data: any = data;
  useEffect(() => {
    console.log('selectedFiles', selectedFiles);
  }, [selectedFiles]);

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
        color={'error'}
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
        Refuser la validation
      </Button>

      <GenericActionModal
        open={
          isModalOpen &&
          openFileSelection === false &&
          displaySelectedFiles === false
        }
        onClose={() => setIsModalOpen(false)}
        actionLabel={'Refuser la validation'}
        successMessage={'La validation a été refusé'}
        message={'Souhaitez-vous refuser cette validation ?'}
        postRouteName={'actionRejectValidation'}
        comment
        commentRequired
        commentParam="reject_comment"
        queries={
          data?.validationCount ? { valid_num: data?.validationCount } : {}
        }
        body={
          selectedFiles.length > 0 && {
            rejectedFiles: selectedFiles.concat(fileId).map((s: string) => {
              return {
                file_id: s,
              };
            }),
          }
        }
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
              >{`Sélectionner les fichiers à refuser: ${data?.number}`}</h2>

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
        height={'400px'}
        footer={
          <div className={'footer'}>
            <Button color={'error'} onClick={cancelDisplayFileSelection}>
              Annuler
            </Button>{' '}
            <Button color={'success'} onClick={DisplayFileSelection}>
              Confirmer le refus
            </Button>
          </div>
        }
      >
        <AcceptValidationStyled>
          <div className="card-items">
            <h2 style={{ fontSize: 18, fontWeight: 600 }} className="font">
              {`Vous êtes sur le point d'effectuer une duplication entre plusieurs fichiers. Vous avez demandé de dupliquer les informations du dossier ${
                data?.number
              } vers ${
                selectedFiles.length === 1 ? 'le dossier' : 'les dossiers'
              }:`}
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
              {`Si vous confimez cette duplication, toutes les informations de la section "Mise en Place" seront dupliquées entre ces dossiers.`}
            </b>
            <p
              style={{
                fontSize: 16,
                fontWeight: 600,
                marginTop: 20,
              }}
            >{`Souhaitez-vous confirmer ce refus?`}</p>
          </div>
        </AcceptValidationStyled>
      </Modal>
    </>
  );
};
