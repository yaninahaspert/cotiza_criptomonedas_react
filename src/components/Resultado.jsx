import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: #FFF;
  font-family: "lato", sans-serif;

`
const Texto = styled.div`
  font-size: 18px;
  span{
    font-weight: 700;
  }

`
const Precio = styled.div`
    font-size: 30px;
  span{
    font-weight: 700;
  }

`
const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY, LOWDAT, CHANGEPCT24HPURS, IMAGEURL, LASTUPDATE} = resultado

    return (
        <Contenedor>
            <img src={`https://criptocompare.com/${IMAGEURL}`} alt="imagen cripto"/>
            <Precio>El precio es de: <span>{PRICE}</span></Precio>
            <Texto>El precio más alto del día: <span>{HIGHDAY}</span></Texto>
            <Texto>El precio más bajo del día: <span>{LOWDAT}</span></Texto>
            <Texto>Variación última 24 horas: <span>{CHANGEPCT24HPURS}</span></Texto>
            <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>
        </Contenedor>
    )
}
export default Resultado;
