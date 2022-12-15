import React, {useEffect, useState} from "react";
import styled from "@emotion/styled"
import useSelectMonedas from "../hooks/useSelectMonedas.jsx";
import {monedas} from "../data/monedas.js";
import Error from "./Error.jsx";

const InputSubmit = styled.input`
  background-color: #9497FF;
  border: none;
  width: 100%;
  padding: 10px;
  color: #FFF;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color .3s ease;

  &:hover {
    background-color: #7A7DFE;
    cursor: pointer;
  }
`

const Formulario = ({setMoneda}) => {
    const [cripto, setCriptos] = useState([])
    const [error, setError] = useState(false)


    const [moneda, SelectMonedas] = useSelectMonedas("Elije tu moneda", monedas)
    const [criptomoneda, SelectCriptomoneda] = useSelectMonedas("Elije tu criptomoneda", cripto)


    useEffect(() => {
        const consultarAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()

            const arrayCriptos = resultado.Data.map(cripto => {

                return {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                };
            })
            setCriptos(arrayCriptos)

        }
        consultarAPI();

    }, [])
    const hanbleSubmit = e => {
        e.preventDefault()
        if ([moneda, criptomoneda].includes("")) {
            setError(true)
            return
        }
        setError(false)
        setMoneda({
            moneda, criptomoneda
        })
    }

    return (
        <>
            {error && <Error>Todos los campos son obligatorios</Error>}
            <form onSubmit={hanbleSubmit}>
                <SelectMonedas/>
                <SelectCriptomoneda/>
                <InputSubmit type="submit" value="Cotizar"/>
            </form>
        </>
    )
}
export default Formulario;