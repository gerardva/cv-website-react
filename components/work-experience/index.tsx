import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function WorkExperience() {
    return (
      <div className="row">
        <div className="col">
          <Typography variant="h5" gutterBottom>Werkervaring</Typography>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ flexGrow: 1 }}>Calcasa</Typography>
              <Typography sx={{ color: 'text.secondary', flexGrow: 2, textAlign: 'end' }}>Developer, Januari 2021 – heden</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Calcasa is een onafhankelijk technologiebedrijf gespecialiseerd in de geautomatiseerde waardering en de statistische analyse van onroerend goed voor hypotheek- en vastgoedorganisaties.
              Bij Calcasa heb ik mij met name bezig gehouden met de ontwikkeling van <a href="https://www.desktoptaxatie.nl" target="_blank">Desktop Taxatie</a>.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography sx={{ flexGrow: 1 }}>Shiftly</Typography>
              <Typography sx={{ color: 'text.secondary', flexGrow: 2, textAlign: 'end' }}>Developer, Augustus 2019 – December 2020</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Via de werkzaamheden met Briskey het aanbod gekregen te komen werken voor Shiftly.
                In deze functie heb ik de Shiftly app uitgebreid met nieuwe functionaliteiten en het <a href="https://mijn.zelfstandigwerkendkok.nl" target="_blank">Zelfstandigwerkendkok</a> platform from scratch ontwikkeld, met een .NET Core backend, Angular frontend en Azure hosting/CI.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography sx={{ flexGrow: 1 }}>Briskey</Typography>
              <Typography sx={{ color: 'text.secondary', flexGrow: 2, textAlign: 'end' }}>Mede-eigenaar, November 2017 – December 2020</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Naast mijn studie ben ik een bedrijfje begonnen met twee vrienden (een designer en een andere developer). 
                Hierbij hebben we ons met name bezig gehouden met het ontwikkelen van het <a href="https://shiftly.nl" target="_blank">Shiftly</a> platform in opdracht van een klant. Dit omvat het from scratch ontwikkelen en onderhouden van een WebAPI (.NET i.c.m. Entity Framework), app (Ionic Framework), web portal (Angular), beheersysteem (Angular) en website (Umbraco CMS).
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography sx={{ flexGrow: 1 }}>TamTam (tegenwoordig DEPT Agency)</Typography>
              <Typography sx={{ color: 'text.secondary', flexGrow: 2, textAlign: 'end' }}>Developer, Augustus 2015 – Februari 2018</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Bij TamTam was ik naast mijn studie voor één dag in de week verantwoordelijk voor het fixen van bugs en toevoegen van features aan .NET websites gebouwd op het Umbraco CMS voor grote klanten zoals <a href="https://mojo.nl" target="_blank">Mojo</a>, <a href="https://tno.nl" target="_blank">TNO</a> en <a href="https://www.denso.com/global/en/" target="_blank">Denso</a>.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5a-content"
              id="panel5a-header"
            >
              <Typography sx={{ flexGrow: 1 }}>Wesoft</Typography>
              <Typography sx={{ color: 'text.secondary', flexGrow: 2, textAlign: 'end' }}>Mede-eigenaar, Augustus 2014 – december 2015</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Wesoft heb ik in 2014 samen met een vriend opgericht waarbij we simpele Wordpress websites ontwikkelden voor kleine bedrijven.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    );
}