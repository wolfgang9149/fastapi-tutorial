from fastapi import FastAPI

app = FastAPI(title="ResearchSat Research Operations Platform (RROP)")

# 🏠 1. 根路由
@app.get("/")
def root():
    return {"message": "Welcome to ResearchSat RROP API Gateway"}

# 👥 2. 用户管理 (直接返回写死的数据，彻底再见 `utf-8` 报错！)
@app.get("/users")
def get_users():
    return {
        "status": "success",
        "data": [
            {"id": 1, "username": "Jib_Boss", "role": "Admin"},
            {"id": 2, "username": "Researcher_Nick", "role": "User"}
        ]
    }

# 📂 3. 项目管理 (直接返回模拟的项目数据，满足老板第二步的要求)
@app.get("/projects")
def get_projects():
    return {
        "status": "success",
        "data": [
            {"project_id": 101, "name": "Satellite Payload A", "status": "Active"},
            {"project_id": 102, "name": "Microgravity Experiment", "status": "Active"}
        ]
    }