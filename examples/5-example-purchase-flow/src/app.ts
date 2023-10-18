import express from 'express';
import bodyParser from 'body-parser';
import * as routes from './routes';
import { useConfig } from './config';
import { loadArticles } from './models/articles';
import { cyan, whiteBold, gray } from './utils/colors';

const config = useConfig();
const port = config.port;
const app = express();
const articles = loadArticles();

app.set('view engine', 'ejs');
app.use(bodyParser.text({ type: 'application/jwt' }));

app.use('/article', routes.article);
app.use('/payment', routes.payment);
app.use('/', (req, res) => {
  const first = Object.values(articles)[0];
  res.redirect(`/article/preview/${first.id}`);
});

app.listen(port, () => {
    console.log(`\n\n${cyan('Loaded:')}\n`);
    console.log(articles);

    console.log(`\n\n${cyan('Server running at:')}\n`);
    console.log(`${whiteBold(`  > Network: ${cyan(`http://localhost:${port}`)}`)}`);
    
    console.log(`\n\n${cyan('Environment:')}\n`);
    Object.entries(config).forEach(([key, value]) => {
        console.log(`${gray(`    ${cyan(key)}: ${value}`)}`);
    });
});