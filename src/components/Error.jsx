import styled from "@emotion/styled"

const Texto = styled.div`
background-color: brown;
  color: white;
  padding: 15px;
  font-size: 18px;
  text-transform: uppercase;
  font-family: "lato", sans-serif;
  font-weight: 700;
  text-align: center;
  border-radius: 5px;
`

const Error=({children})=>{
    return(
        <Texto>
            {children}
        </Texto>
    )
}
export default Error