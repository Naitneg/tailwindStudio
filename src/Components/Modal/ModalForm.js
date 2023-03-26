import React from "react";
import { MaterialSymbolsCloseSharp } from "../UI/Menu";

function ModalForm(props) {
  return (
    <div
      className={`fixed top-0 w-full h-screen z-50 overflow-auto ${
        props.modal ? "animate-slide-above" : "animate-slide-back"
      } `}
    >
      <div
        className="text-black text-3xl w-full flex justify-end mt-5"
        onClick={props.onHide}
      >
        <MaterialSymbolsCloseSharp className="bg-white mr-6 rounded-full p-1 cursor-pointer" />
      </div>
      <h1 className="border-b-2 border-white w-full text-center py-5 font-bold text-white text-4xl">
        Almost There!
      </h1>
      <form className="flex flex-col w-3/4 mx-auto gap-3 mt-10">
        <label htmlFor="emri">Emri dhe Mbiemri</label>
        <input type="text" placeholder="Emri dhe Mbiemri" />
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="example@gmail.com" />
        <label htmlFor="adresa">Adresa</label>
        <input type="text" placeholder="Rr. Fadil Deliqi" />
        <label htmlFor="qyteti">Qyteti</label>
        <input type="text" placeholder="Mitrovicë" />
        <label htmlFor="mesazhi">Mesazhi</label>
        <textarea name="mesazhi" id="mesazhi" cols="30" rows="10"></textarea>
        <button className="bg-orange-700 font-semibold w-fit mx-auto rounded-md text-white py-2 px-20 mb-10 mt-5">
          SEND
        </button>
      </form>
    </div>
  );
}

export default ModalForm;
