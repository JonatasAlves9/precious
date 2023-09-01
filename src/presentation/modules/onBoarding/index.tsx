import React from 'react';
import {Button, makeStyles, shorthands, Text, tokens} from "@fluentui/react-components";
import {Container, ImageCoverFooter} from "./styles";

const useStyles = makeStyles({
    container: {
        ...shorthands.gap("16px"),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: '50%',
    },
});
export const OnBoarding = () => {
    const styles = useStyles();


    return (
            <Container>
                <div className={styles.container}>
                    <Text size={1000} style={{
                        textAlign: 'center',

                    }}>Controle o que você tem de mais PRECIOUS</Text>
                    <Text size={400} style={{
                        color: tokens.colorStatusWarningBorder2
                    }}>Sua conta Microsoft conecta todos os seus aplicativos e serviços da Microsft.</Text>
                    <Button size={'medium'} appearance={'primary'} style={{
                        marginTop: '30px'
                    }}>Entrar</Button>
                </div>
                <ImageCoverFooter/>

            </Container>

    )
}