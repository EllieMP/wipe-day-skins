import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box'

function ItemSquare(props) {
	const {imageURL} = props;
  return (
    <Card sx={{ height:100, width: 100}} style={{backgroundColor: "grey"}}>
      <CardMedia
        component="img"
        height="100"
        width="100"
        image={require('../../../assets/skins/attire/roadsignGloves/pirate.png')}
      />
    </Card>
  );
}

export default ItemSquare;
