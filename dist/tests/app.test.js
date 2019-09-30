"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("supertest");
const app_1 = require("../config/app");
describe("Root API endpoint", () => {
    it("GET - succeeds with status 200", async () => {
        const result = await request(app_1.default).get("/");
        expect(result.status).toBe(200);
    });
});
//# sourceMappingURL=app.test.js.map