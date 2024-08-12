import { NextFunction, Request, Response } from 'express';
import { TemplateMetadataModel } from '../../models';

const getTemplateMetadata = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const templateMetadata = await TemplateMetadataModel.getTemplateMetadata(Number(req.params.id));
    return res.json(templateMetadata);
  } catch (err) {
    next(err);
  }
};

const createATemplateMetadata = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const templateMetadata = await TemplateMetadataModel.createATemplateMetadata(Number(req.params.id), req.body);
    return res.status(201).json(templateMetadata);
  } catch (err) {
    next(err);
  }
};

const updateATemplateMetadata = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const templateMetadata = await TemplateMetadataModel.updateATemplateMetadata(Number(req.params.id), req.body, Number(req.params.metadata_id));
    return res.status(201).json(templateMetadata);
  } catch (err) {
    next(err);
  }
};

const deleteATemplateMetadata = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const templateMetadata = await TemplateMetadataModel.deleteATemplateMetadata(Number(req.params.id), Number(req.params.metadata_id));
    return res.status(204).send(templateMetadata);
  } catch (err) {
    next(err);
  }
};

export {
  getTemplateMetadata,
  createATemplateMetadata,
  updateATemplateMetadata,
  deleteATemplateMetadata,
};