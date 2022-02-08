const Sequelize = require("sequelize");
import controller from '../controllers/users';
const router = express.Router();

router.get('/users', controller.getPosts);
router.get('/users/:id', controller.getPost);
router.put('/users/:id', controller.updatePost);
router.delete('/users/:id', controller.deletePost);
router.post('/users', controller.addPost);

export = router;
