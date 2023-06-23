import React from "react";
import styled from "styled-components";
import Ganancias from "../components/Ganancias/Ganancias";

const Home = () => {
    return (
        <>
            <Container>
                <SubContainer>
                    <SectionA>
                        <ColumnA1>
                            <Ganancias></Ganancias>
                        </ColumnA1>
                        <ColumnA2></ColumnA2>
                    </SectionA>
                </SubContainer>
            </Container>
        </>
    );
};

export default Home;

const Container = styled.div`
    width: 80%;
    border-bottom-right-radius: 2rem;
    background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
    border-top-right-radius: 2rem;
    margin: 1rem 8rem 1rem 4rem;
    @media screen and (min-width: 320px) and (max-width: 1080px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 1rem 0 0 0;
    }
`;
const SubContainer = styled.div`
    margin: 0.5rem 0;
    height: 80%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    @media screen and (min-width: 320px) and (max-width: 1080px) {
        height: 100%;
    }
`;

const SectionA = styled.div`
    display: flex;
    justify-content: space-between;
    height: 40%;
    gap: 2rem;
    width: 100%;
    @media screen and (min-width: 320px) and (max-width: 1080px) {
        flex-direction: column;
        align-items: center;
        height: max-content;
    }
`;
const ColumnA1 = styled.div`
    display: flex;
    gap: 3rem;
    @media screen and (min-width: 320px) and (max-width: 1080px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        width: 100%;
    }
`;
const ColumnA2 = styled.div`
    display: flex;
    flex-direction: column;
    height: 115%;
    width: 100%;
    @media screen and (min-width: 320px) and (max-width: 1080px) {
        height: max-content;
        justify-content: center;
        align-items: center;
    }
`;
