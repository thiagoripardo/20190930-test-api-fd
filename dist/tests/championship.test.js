"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("supertest");
const app_1 = require("../config/app");
describe("Championships API endpoints", () => {
    it("ALL: GET - succeeds with status 200 (simple request)", async () => {
        const result = await request(app_1.default).get("/api/championships");
        expect(result.status).toBe(200);
    });
    it("FILTER: GET - succeeds with status 200 when request is filtered by year", async () => {
        const result = await request(app_1.default).get("/api/championships?year=2019");
        expect(result.status).toBe(200);
    });
    it("FILTER: GET - succeeds with status 200 when request is filtered by championship", async () => {
        const result = await request(app_1.default).get("/api/championships?championship=Wimbledon");
        expect(result.status).toBe(200);
    });
    it("FILTER: GET - succeeds with status 200 when request is filtered by champion", async () => {
        const result = await request(app_1.default).get("/api/championships?champion=Rafael Nadal");
        expect(result.status).toBe(200);
    });
    it("SORT: GET - succeeds with status 200 when request is ordered by championship", async () => {
        const result = await request(app_1.default).get("/api/championships?orderBy=year&order=asc");
        expect(result.status).toBe(200);
    });
    it("SORT: GET - succeeds with status 200 when request is ordered by championship", async () => {
        const result = await request(app_1.default).get("/api/championships?orderBy=year&order=desc");
        expect(result.status).toBe(200);
    });
    it("SORT: GET - succeeds with status 200 when request is ordered by championship", async () => {
        const result = await request(app_1.default).get("/api/championships?orderBy=test&order=test");
        expect(result.status).toBe(200);
    });
    it("PAGINATION: GET - succeeds with status 200 when request is filtered by champion", async () => {
        const result = await request(app_1.default).get("/api/championships?pageSize=5&pageNumber=1");
        expect(result.status).toBe(200);
    });
});
//# sourceMappingURL=championship.test.js.map