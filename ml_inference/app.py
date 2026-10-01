
# pyrefly: ignore [missing-import]
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import pickle
import os
app = FastAPI(title="AutoPredict ML Inference API")
MODEL_PATH = os.getenv("MODEL_PATH", "extra_trees_model.pkl")
model = None
@app.on_event("startup")
def load_model():
    global model
    try:
        with open(MODEL_PATH, "rb") as f:
            model = pickle.load(f)
        print(f"Model loaded successfully from {MODEL_PATH}")
    except Exception as e:
        print(f"Warning: Failed to load model from {MODEL_PATH}: {e}")
class PredictionRequest(BaseModel):
    features: list
@app.get("/health")
def health_check():
    return {"status": "ok", "service": "ml-inference", "model_loaded": model is not None}
@app.post("/predict")
def predict(req: PredictionRequest):
    if model is None:
        raise HTTPException(status_code=503, detail="Model is not loaded.")
    try:
        prediction = model.predict([req.features])
        return {"prediction": prediction.tolist()}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
