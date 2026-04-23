import type { NextFunction, RequestHandler, Request, Response } from "express";
declare const TryCatch: (handler: RequestHandler) => (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export default TryCatch;
//# sourceMappingURL=TryCatch.d.ts.map