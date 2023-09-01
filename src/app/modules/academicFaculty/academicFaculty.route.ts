import express from 'express';

import { RequestValidation } from '../../middlewares/validateRequest';
import { AcademicFacultyController } from './academicFaculty.controller';
import { AcademicFacultyValidation } from './academicFaculty.validations';

const router = express.Router();

router.post(
  '/create-faculty',
  RequestValidation(AcademicFacultyValidation.createFacultyZodSchema),
  AcademicFacultyController.createFaculty,
);

router.get('/:id', AcademicFacultyController.getSingleFaculty);

router.get('/', AcademicFacultyController.getAllFaculties);

router.patch(
  '/:id',
  RequestValidation(AcademicFacultyValidation.updateFacultyZodSchema),
  AcademicFacultyController.updateFaculty,
);

router.delete('/:id', AcademicFacultyController.deleteFaculty);

export const AcademicFacultyRoutes = router;
