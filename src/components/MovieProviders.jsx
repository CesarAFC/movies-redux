import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ProviderDetail from './ProviderDetail';
import { List } from '@mui/material';

export default function MovieProviders({ providersArrary }) {
    const results = providersArrary;
  return (
    <div>
      <Accordion sx={{ width: "30%", minWidth: 300 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{results ? 'Providers' : 'No Providers'}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            { results && results.map( (elem) => (
                <ProviderDetail key={elem.provider_id} name={elem.provider_name} logo={elem.logo_path}/>
            ) )}
          </List>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}