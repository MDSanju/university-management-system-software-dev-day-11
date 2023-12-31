import express from 'express';

import { RequestValidation } from '../../middlewares/validateRequest';
import { FacultyController } from './faculty.controller';
import { FacultyValidation } from './faculty.validations';

const router = express.Router();

router.get('/:id', FacultyController.getSingleFaculty);

router.get('/', FacultyController.getAllFaculties);

router.patch(
  '/:id',
  RequestValidation(FacultyValidation.updateFacultyZodSchema),
  FacultyController.updateFaculty,
);

router.delete('/:id', FacultyController.deleteFaculty);

export const FacultyRoutes = router;
