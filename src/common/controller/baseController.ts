import { Request, Response } from "express";

export interface IController {
  getAll(req?: any): Promise<any>;
  getOneByID(id: string, data: any): Promise<any>;
  save(id: string): Promise<any>;
  update(id: string, data: any): Promise<any>;
  destroy(id: string, data: any): Promise<any>;
  exist(id: string, data: any): Promise<any>;
}
