import SearchIcon from '@mui/icons-material/Search';
import {
    Card,
    CardContent,
    Container,
    CssBaseline,
    Grid,
    IconButton,
    InputAdornment,
    TextField,
    Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useCallback, useState } from 'react';

var list = [
    {
        ville: 'toulouse',
        name: "Toulouse - L'union",
        address1: "243 Route d'Albi",
        address2: '31200 Toulouse',
        tel: '05 61 11 03 53',
        time: 'Lundi - Vendredi : 9h-12h30 ; 13h15-17h30',
        time2: 'Samedi : 9h-13h',
    },
    {
        ville: 'toulouse',
        name: 'Toulouse - Université',
        address1: '70 Rue Jacques Babinet',
        address2: '31200 Toulouse',
        tel: '05 66 11 33 55',
        time: 'Lundi - Vendredi : 9h-12h30 ; 13h15-17h30',
        time2: 'Samedi : 9h-13h',
    },
    {
        ville: 'toulouse',
        name: 'Toulouse - Colomiers',
        address1: '4 Rue de Caulet ',
        address2: '31200 Toulouse',
        tel: '05 12 43 89 57',
        time: 'Lundi - Vendredi : 9h-12h30 ; 13h15-17h30',
        time2: 'Samedi : 9h-13h',
    },
    {
        ville: 'ramonville',
        name: 'Toulouse - Ramonville',
        address1: '2 Avenue des Crêtes',
        address2: '31520 Ramonville',
        tel: '05 63 33 63 73',
        time: 'Lundi - Vendredi : 9h-12h30 ; 13h15-17h30',
        time2: 'Samedi : 9h-13h',
    },
];
// console.log('rerender');
const MyContent = () => {
    const [gardeList, setGardeList] = useState(() => list);
    const [textInput, setTextInput] = useState('');

    const onTextInputchange = useCallback((e) => {
        setTextInput(e.target.value);
        if (textInput === '') {
            setGardeList(list);
        }
    }, []);

    var filterList = gardeList.filter((e) => e.ville.toLowerCase().includes(textInput.toLowerCase()));

    const handleOnPress = useCallback(
        (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                setGardeList(filterList);
            }
        },
        [filterList],
    );

    // console.log(textInput);
    // console.log(filterList);
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md" sx={{ minHeight: '100vh' }}>
                <Box sx={{ width: '100%', height: 'auto', bgcolor: '#f0f2f2', padding: '20px' }}>
                    <Typography variant="h6" component="div" gutterBottom sx={{ color: '#CD2927' }}>
                        Garde meubles Toulouse
                    </Typography>
                    <Typography variant="body2" component="div" gutterBottom>
                        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant
                        impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500,
                        quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre
                        spécimen de polices de texte.
                    </Typography>
                    <Typography variant="body2" component="div">
                        Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il
                        trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le
                        rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé
                        à un des mots latins les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en
                        étudiant tous les usages de ce mot dans la littérature classique, découvrit la source
                        incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du "De Finibus
                        Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très
                        populaire pendant la Renaissance, est un traité sur la théorie de l'éthique. Les premières
                        lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de la section 1.10.32.
                    </Typography>
                </Box>
                <Box sx={{ width: '100%', height: 'auto', bgcolor: '#f0f2f2', padding: '20px' }}>
                    <Grid container columns={{ xs: 12, sm: 12, md: 12 }}>
                        <Grid item xs={12} sm={12} md={6}>
                            <TextField
                                sx={{ ml: 1, flex: 1, width: '100%', marginLeft: '0' }}
                                placeholder="Ex: Toulouse, Ramonville ..."
                                label="Rechercher une ville"
                                color="info"
                                value={textInput}
                                onChange={onTextInputchange}
                                onKeyPress={handleOnPress}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment>
                                            <IconButton disabled>
                                                <SearchIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ width: '100%', height: 'auto', minHeight: '275px', bgcolor: '#f0f2f2', padding: '20px' }}>
                    <Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 12 }}>
                        {gardeList.map((e) => (
                            <Grid item xs={12} sm={6} md={3} key={e.address1}>
                                <Card>
                                    <CardContent>
                                        <Typography
                                            sx={{ mb: 1.5, fontSize: '0.8rem' }}
                                            color="text.secondary"
                                            gutterBottom
                                        >
                                            <strong>{e.name}</strong>
                                        </Typography>

                                        <Typography sx={{ mb: 1.5, fontSize: '0.8rem', color: '#CD2927' }}>
                                            <strong>{e.address1}</strong> <br />
                                            <strong>{e.address2}</strong>
                                        </Typography>

                                        <Typography sx={{ mb: 1.5, fontSize: '0.7rem' }} gutterBottom>
                                            Tél: <strong>{e.tel}</strong>
                                        </Typography>
                                        <Typography sx={{ mb: 1.5, fontSize: '0.7rem' }}>
                                            Horaires des bureaux: <br />
                                            {e.time} <br />
                                            {e.time2}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Box sx={{ width: '100%', height: 'auto', bgcolor: '#f0f2f2', padding: '20px' }}>
                    <Typography sx={{ textAlign: 'right' }} variant="body2">
                        <i>Toulouse solution de self-stockage</i>
                    </Typography>
                </Box>
            </Container>
        </React.Fragment>
    );
};

export default MyContent;
