from flask import Flask,request
from flask_cors import CORS,cross_origin
import pickle
import pandas as pd
import numpy as np

app=Flask(__name__)
cors=CORS(app)
model=pickle.load(open('log_reg.pkl','rb'))
trans=pickle.load(open('transformer.pkl','rb'))


@app.route('/predict',methods=['POST'])
@cross_origin()
def predict():

    contract=request.form.get('contract')
    onlinesecurity=request.form.get('onlinesecurity')
    techsupport=request.form.get('techsupport')
    internetservice=request.form.get('internetservice')
    onlinebackup=request.form.get('onlinebackup')
    tenure=int(request.form.get('tenure'))
    monthlycharges=float(request.form.get('monthlycharges'))
    totalcharges=float(request.form.get('totalcharges'))

    cust ={'contract': contract,
            'onlinesecurity': onlinesecurity,
            'techsupport': techsupport,
            'internetservice': internetservice,
            'onlinebackup': onlinebackup,
            'tenure': tenure,
            'monthlycharges': monthlycharges,
            'totalcharges': totalcharges
            }

    pd.DataFrame(cust, index=[0])
    cust = trans.transform(pd.DataFrame(cust, index=[0]))
    model.predict(cust)[0]
    model.predict_proba(cust)[0][1] 
    if model.predict(cust)[0] == 0 :
        print('Not Churn')
        return {"predict":"Not Churn" , "proba":model.predict_proba(cust)[0][0] }
    else :
        print('Churn')
        return {"predict":"Churn" , "proba":model.predict_proba(cust)[0][1]}


if __name__=='__main__':
    app.run()