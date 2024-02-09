"use client";

import React, { useState } from "react";
import Modal from "./Modal";

const AddTask = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    return (
        <div>  
            <button onClick={handleOpenModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Añadir Tarea
            </button>
            {modalOpen && <Modal closeModal={() => setModalOpen(false)} />}
        </div>
    );
};

export default AddTask;
