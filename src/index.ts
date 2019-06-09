import { app } from './app';
import { config } from '../config'

app.listen(config.get('port'), () => {
    console.log(`Example app listening on port ${config.get('port')}!`)
});