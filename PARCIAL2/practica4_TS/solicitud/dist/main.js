"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const microservices_1 = require("@nestjs/microservices");
const dotenv = require("dotenv");
dotenv.config();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.connectMicroservice({
        transport: microservices_1.Transport.NATS,
        options: {
            url: process.env.NATS_URL,
        },
    });
    await app.startAllMicroservices();
    await app.listen(process.env.PORT || 3001);
}
bootstrap().catch((err) => {
    console.error('Error al iniciar el microservicio:', err);
});
//# sourceMappingURL=main.js.map