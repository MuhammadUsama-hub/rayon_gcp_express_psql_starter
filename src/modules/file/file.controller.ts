import { APIResponse, ExReq, Message } from "#/src/lib/types/misc";
import { toResponse } from "#/src/lib/utils";
import { statusConst } from "#/src/lib/utils/status";
import {
  Body,
  Controller,
  Delete,
  Post,
  Request,
  Route,
  Security,
  Tags,
  UploadedFile,
} from "tsoa";
import { getReqUser } from "../auth/auth.helpers";
import fileService from "./file.service";

@Route("files")
@Tags("Files")
@Security("jwt")
export class FileController extends Controller {
  @Post("/")
  public async create(
    @UploadedFile() file: Express.Multer.File,
    @Request() req: ExReq
  ): Promise<APIResponse<{ url: string }>> {
    const reqUser = getReqUser(req);
    const [url] = await fileService.save([{ ...file, createdBy: reqUser.id }]);

    this.setStatus(statusConst.created.code);
    return toResponse({
      data: { url },
    });
  }

  @Delete("/")
  public async remove(
    @Request() req: ExReq,
    @Body() body: { url: string }
  ): Promise<APIResponse<Message>> {
    const file = await fileService.fetch(body.url);
    if (file.metadata.metadata?.createdBy !== getReqUser(req).id) {
      this.setStatus(statusConst.unAuthorized.code);
      return toResponse({ error: statusConst.unAuthorized.message });
    }

    await file.delete();
    return toResponse({ data: { message: "File deleted successfully" } });
  }
}
