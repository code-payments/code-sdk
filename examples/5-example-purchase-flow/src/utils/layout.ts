import ejs from 'ejs';
import path from 'path';
import { Response } from 'express';

export function useLayout() {
  return async (res: Response, viewName: string, viewData: any) => {
    const viewPath = `../../views/pages/${viewName}.ejs`;
    const body = await ejs.renderFile(path.join(__dirname, viewPath), viewData);
    res.render('sections/layout', {
      body,
    });
  };
}