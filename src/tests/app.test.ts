import * as request from 'supertest';
import app from "../config/app";

describe("Root API endpoint", () => {
    it("GET - succeeds with status 200", async () => {
        const result = await request(app).get("/");
        // expect(result.text).toEqual("test");
        expect(result.status).toBe(200);
    });
});