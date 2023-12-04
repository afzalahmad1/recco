import React from "react";
import {
  CloseFlex,
  ConfirmFlex,
  Modal,
  ModalContent,
} from "../StyledComponents/MissingModal";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { updateStatus } from "../store/slices/ProductsSlice";
import { useDispatch } from "react-redux";


const MissingModal = ({ handleModal, setHandleModal , index}) => {

  const dispatch = useDispatch();
    const fixModal = (e)=>{
        e.stopPropagation();
    }
    function handleYes(){
        dispatch(updateStatus({
          id: index,
          status: "missing-urgent"
        }))
        setHandleModal(false)
    }
    function handleNo(){
      dispatch(updateStatus({
        id: index,
        status: "missing"
      }))
        setHandleModal(false)
    }
  return (
    <div>
      {handleModal && (
        <Modal onClick={fixModal}>
          <ModalContent>
            <CloseFlex>
              <h3>Missing Product</h3>
              <div onClick={() => setHandleModal(!handleModal)}>
                <CloseRoundedIcon />
              </div>
            </CloseFlex>
            <p>Urgent Missing ?</p>
            <ConfirmFlex>
              <div onClick={handleNo } style={{cursor:"pointer"}}>No</div>
              <div onClick={handleYes} style={{cursor:"pointer"}}>Yes</div>
            </ConfirmFlex>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

export default MissingModal;
