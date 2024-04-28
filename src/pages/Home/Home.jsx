import Hero from "../../components/Hero/Hero";

import {
  CategoriasWrapper,
  HomeWrapper,
  ProductosWrapper,
  RecomendadosWrapper,
} from "./HomeStyles";

function Home() {
  const doScroll = () => {
    window.scrollTo(
      productsRef.current.getBoundingClientRect().x,
      productsRef.current.getBoundingClientRect().y
    );
  };

  return (
    <HomeWrapper>
      {/* Hero Section */}

      <Hero />
      {/* Recomendados Section */}
      <RecomendadosWrapper>
        <h2>Hoy te recomendamos</h2>
      </RecomendadosWrapper>

      {/* Categorias Section */}
      <CategoriasWrapper>
        <h2>Categorias</h2>
      </CategoriasWrapper>

      {/* Populares Section*/}
      {/* AGREGAR ACA LA REF DE PRODUCTSREF */}
      <ProductosWrapper>
        <h2>Nuestros productos</h2>
      </ProductosWrapper>
    </HomeWrapper>
  );
}

export default Home;
