const app = require("./server-4")
const supertest = require("supertest")
const request = supertest(app)

describe("/about endpoint", () => {
    it("should return a response", async () => {
        const response = await request.get("/about")
        expect(response.status).toBe(200)
    })
})
