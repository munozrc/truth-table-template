import React, { FC } from "react";
import Input from "../../components/Input";

const Home: FC<{}> = () => {
  return (
    <div>
      <form>
        <Input type="number" labelValue="Número de entradas" />
      </form>
    </div>
  )
}

export default Home