import app from './app';

import './database/index';

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333!');
});
