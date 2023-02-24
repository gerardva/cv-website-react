import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function About() {
    return (
        <Card sx={{ minWidth: 275, marginTop: '-60px' }}>
        <CardContent>
          <Typography variant="h5" component="div" sx={{mb: 2}}>
            Over mij
          </Typography>
          <Typography variant="body2">
            Sofware engineer afgestudeerd voor de MSc Computer Science studie aan de TU Delft, momenteel werkzaam bij Calcasa. Passie voor het bedenken van mooie softwareoplossingen, met een voorkeur voor backend ontwikkeling. In mijn carrière ervaring opgedaan met onder andere C# .NET, Angular, Azure, Kubernetes, gRPC en Ionic Framework.
          </Typography>
        </CardContent>
      </Card>
    );
}