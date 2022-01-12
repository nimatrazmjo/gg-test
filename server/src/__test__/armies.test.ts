import request from "supertest";
import { app } from "../app";

describe("GET /armies/:total", () => {
  const TOTAL_ARMY = 167;
  const ARMY_API = `/api/armies`;
  it(`Should return 404 if ${ARMY_API} not found`, async () => {
    const response = await request(app).get(`${ARMY_API}/${TOTAL_ARMY}`);
    expect(response.statusCode).not.toBe(404);
  });
  
  it(`Should return 400 if The army amount is less than 3`, async () => {
    await request(app).get(`${ARMY_API}/2`).expect(400);
  });

  it("should return 200 for successful response", async () => {
    const response = await request(app).get(`${ARMY_API}/${TOTAL_ARMY}`);
    expect(response.statusCode).toBe(200);
  });
});
