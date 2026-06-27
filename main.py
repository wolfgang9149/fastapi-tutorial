from fastapi import FastAPI

app = FastAPI(title="ResearchSat Research Operations Platform (RROP)")

# 🏠 1. 根路由 (验证 API Gateway 存活)
@app.get("/")
def root():
    return {"message": "Welcome to ResearchSat RROP API Gateway"}

# ==========================================
# 👥 模块 1：用户管理 (User Management)
# ==========================================
@app.get("/users")
def get_users():
    return {
        "status": "success",
        "data": [
            {"id": 1, "username": "Jibin_Boss", "role": "Admin"},
            {"id": 2, "username": "Researcher_A", "role": "User"}
        ]
    }

# ==========================================
# 📂 模块 2：研究项目 (Research Projects)
# ==========================================
@app.get("/projects")
def get_projects(status: str = "Active"):
    """痛点 1：查询所有活跃的项目 (Active Projects)"""
    return {
        "status": "success",
        "filters": {"status": status},
        "data": [
            {"project_id": 101, "name": "Satellite Payload A", "status": "Active", "lead": "Dr. Sarah"},
            {"project_id": 102, "name": "Microgravity Plant Growth", "status": "Active", "lead": "Prof. Chen"}
        ]
    }

# ==========================================
# 🧪 模块 3：实验管理 (Experiment Management)
# ==========================================
@app.get("/experiments/delayed")
def get_delayed_experiments():
    """痛点 2 & 4：查询所有延期的实验 (Delayed Experiments) 并跟踪时间表"""
    return {
        "status": "success",
        "data": [
            {
                "experiment_id": 501, 
                "project_id": 101, 
                "title": "Radiation Shielding Test v1", 
                "status": "Delayed", 
                "original_end_date": "2026-06-20",
                "days_overdue": 7
            }
        ]
    }

# ==========================================
# 🧬 模块 4：样本管理 (Sample Management)
# ==========================================
@app.get("/samples/status")
def get_samples_status(is_consumed: bool = False):
    """痛点 5：查询生物/工程样本的状态（未消耗/已消耗）"""
    return {
        "status": "success",
        "filters": {"is_consumed": is_consumed},
        "data": [
            {"sample_id": 9001, "name": "C. elegans Batch-04", "type": "Biological", "is_consumed": False},
            {"sample_id": 9002, "name": "Alloy Matrix Specimen", "type": "Engineering", "is_consumed": False}
        ]
    }