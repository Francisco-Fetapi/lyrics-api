import React from "react";
import TemplateModal from "./Template.jsx";
import { useEffect } from "react";
import { alterarLarguraDoModal } from "../../helpers/LoginAndSignUp";
import { useState } from "react";

import InfoPerfil from "../Perfil/InfoPerfil.jsx";
import { useSelector } from "react-redux";
import { selectAll } from "../../store/App.selectors";

export default function ModalEditarPerfil(props) {
  const [propsModal, setPropsModal] = useState({});

  const { usuario } = useSelector(selectAll);
  useEffect(() => {
    window.onresize = () => alterarLarguraDoModal(setPropsModal, 410);
    window.onload = () => alterarLarguraDoModal(setPropsModal, 410);
    return () => {
      window.onresize = null;
      window.onload = null;
    };
  }, []);
  return (
    <TemplateModal
      nomeModal="modalVerPerfil"
      titulo={`${usuario.nome} - Perfil`}
      subtitulo="Todos os dados da sua conta."
      {...propsModal}
      {...props}
    >
      <InfoPerfil />
    </TemplateModal>
  );
}
