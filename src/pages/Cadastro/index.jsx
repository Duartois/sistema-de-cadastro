import { useRef } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

function Cadastro() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      await api.post("/cadastro", {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      alert("Usuário Cadastrado com Sucesso");
    } catch (err) {
      alert("Erro ao cadastrar usuário");
    }

    console.log(nameRef.current.value)
    console.log(emailRef.current.value)
    console.log(passwordRef.current.value)
  }

  return (
    <div className="max- w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Cadastro
      </h2>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <input
          ref={nameRef}
          placeholder="Nome"
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
        />
        <input
          ref={emailRef}
          placeholder="Email"
          type="email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
        />
        <input
          ref={passwordRef}
          placeholder="Senha"
          type="password"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
        />
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-400">
          Cadastrar-se
        </button>
      </form>

      <Link
        to="/login"
        className="text-blue-700 hover:underline mt-4 block text-center"
      >
        Já tem uma conta? Faça Login
      </Link>
    </div>
  );
}

export default Cadastro;
