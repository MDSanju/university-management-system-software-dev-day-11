import express from 'express';

import { RequestValidation } from '../../middlewares/validateRequest';
import { AcademicDepartmentController } from './academicDepartment.controller';
import { AcademicDepartmentValidation } from './academicDepartment.validations';

const router = express.Router();

router.post(
  '/create-department',
  RequestValidation(
    AcademicDepartmentValidation.createAcademicDepartmentZodSchema,
  ),
  AcademicDepartmentController.createDepartment,
);

router.get('/:id', AcademicDepartmentController.getSingleDepartment);

router.get('/', AcademicDepartmentController.getAllDepartments);

router.patch(
  '/:id',
  RequestValidation(
    AcademicDepartmentValidation.updateAcademicDepartmentZodSchema,
  ),
  AcademicDepartmentController.updateDepartment,
);

router.delete('/:id', AcademicDepartmentController.deleteDepartment);

export const AcademicDepartmentRoutes = router;
