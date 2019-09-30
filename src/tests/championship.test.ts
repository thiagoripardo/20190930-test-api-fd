import * as request from 'supertest';
import app from "../config/app";

describe("Championships API endpoints", () => {
    it("GET - succeeds with status 200 (simple request)", async () => {
        const result = await request(app).get("/api/championships");
        expect(result.status).toBe(200);
    });

    it("GET - succeeds with status 200 when request is filtered by year", async () => {
        const result = await request(app).get("/api/championships?year=2019");
        expect(result.status).toBe(200);
    });

    it("GET - succeeds with status 200 when request is filtered by championship", async () => {
        const result = await request(app).get("/api/championships?championship=Wimbledon");
        expect(result.status).toBe(200);
    });

    it("GET - succeeds with status 200 when request is filtered by champion", async () => {
        const result = await request(app).get("/api/championships?champion=Rafael Nadal");
        expect(result.status).toBe(200);
    });
});