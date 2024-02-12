"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import ErrorMessage from "./ErrorMessage";
import { useSession } from "next-auth/react";

const AddTask = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [ErrorMessageOpen, setErrorMessageOpen] = useState(false);

    const { data: session } = useSession();

    const handleOpenModal = () => {
        if (session && session.user) {
            setModalOpen(true);
        } else {
            setErrorMessageOpen(true); // Abrir el mensaje de error si el usuario no está autenticado
        }
    };

    return (
        <div>  
            <button onClick={handleOpenModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Añadir Tarea
            </button>
            {modalOpen && <Modal closeModal={() => setModalOpen(false)} />}
            {ErrorMessageOpen && (
                <ErrorMessage
                    message="You have to be loged in to post a task"
                    closeErrorMessage={() => setErrorMessageOpen(false)}
                />
            )}
        </div>
    );
};

export default AddTask;


