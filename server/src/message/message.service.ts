import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { MessageServiceBase } from "./base/message.service.base";

@Injectable()
export class MessageService extends MessageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
