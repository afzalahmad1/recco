import { useState } from "react";
import Bar from "./components/Bar";
import Header from "./components/Header";
import MissingModal from "./components/MissingModal";
import Order from "./components/Order";
import Table from "./components/Table";
import AddModal from "./components/AddModal";


function App() {
  const [handleModal, setHandleModal] = useState(false);
  const [handleAddModal, setHandleAddModal] = useState(false);
  const [index,setIndex] = useState(0);
  return (
    <div >
     <Header />
     <Order />
     <Bar />
     <Table setHandleModal={setHandleModal} setIndex={setIndex} setHandleAddModal={setHandleAddModal}/>
     <MissingModal handleModal={handleModal} setHandleModal={setHandleModal} index={index}/>
     <AddModal handleAddModal={handleAddModal} setHandleAddModal={setHandleAddModal} index={index}/>
    </div>
  );
}

export default App;
