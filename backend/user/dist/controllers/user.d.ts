import type { AuthenticatedRequest } from "../middleware/isAuth.js";
export declare const loginUser: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => Promise<import("express").Response<any, Record<string, any>> | undefined>;
export declare const verifyUser: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => Promise<import("express").Response<any, Record<string, any>> | undefined>;
export declare const myProfile: (req: AuthenticatedRequest, res: any) => Promise<void>;
export declare const updateMyProfile: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => Promise<import("express").Response<any, Record<string, any>> | undefined>;
export declare const getAllUser: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => Promise<import("express").Response<any, Record<string, any>> | undefined>;
export declare const GetUserByID: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => Promise<import("express").Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=user.d.ts.map