import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Project } from '../../types/project';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActions, Link } from '@mui/material';

export default function Projects({ projects }: { projects: Project[] }) {
    return (
      <div className="row">
        <div className="col">
          <Typography variant="h5" gutterBottom>Projecten</Typography>
          <Typography variant="body2" mb={2}>Bekijk hieronder de belangrijkste projecten waaraan ik heb gewerkt.</Typography>
          <div className="row">
              {projects.map(p => (
                <div className="col-md-6 mb-4" key={p.id}>
                  <Card>
                    <CardMedia
                      sx={{ height: 300 }}
                      image={p.assetsFolder + p.headerImage}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {p.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{minHeight: '200px'}}>
                        {p.introText}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Link href={`/projects/${p.id}`}>
                        <Button size="small">Bekijk project</Button>
                      </Link>
                      
                    </CardActions>
                  </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}
