
import InputField from "./InputField";
import SelectField from "./SelectField";

function AllInputs({ dark, handleChange, handleNumberSelect}) {

    return(

        <div className="grid grid-cols-2 gap-4">

          <InputField label="Age" name="age" dark={dark} onChange={handleChange} />

          <SelectField
            label="Sex"
            name="sex"
            dark={dark}
            onChange={handleNumberSelect}
            options={[
              { label: "Male", value: 1 },
              { label: "Female", value: 0 }
            ]}
          />

          <SelectField
            label="Chest Pain Type"
            name="cp"
            dark={dark}
            onChange={handleNumberSelect}
            options={[
              { label: "Typical Angina", value: 0 },
              { label: "Atypical Angina", value: 1 },
              { label: "Non-anginal Pain", value: 2 },
              { label: "Asymptomatic", value: 3 }
            ]}
          />

          <InputField
            label="Resting Blood Pressure (mm Hg)"
            name="trestbps"
            dark={dark}
            onChange={handleChange}
          />

          <InputField
            label="Serum Cholesterol (mg/dl)"
            name="chol"
            dark={dark}
            onChange={handleChange}
          />

          <SelectField
            label="Fasting Blood Sugar"
            name="fbs"
            dark={dark}
            onChange={handleNumberSelect}
            options={[
              { label: "True (>120 mg/dl)", value: 1 },
              { label: "False (≤120 mg/dl)", value: 0 }
            ]}
          />

          <SelectField
            label="Resting ECG"
            name="restecg"
            dark={dark}
            onChange={handleNumberSelect}
            options={[
              { label: "Normal", value: 0 },
              { label: "ST-T Wave Abnormality", value: 1 },
              { label: "Left Ventricular Hypertrophy", value: 2 }
            ]}
          />

          <InputField
            label="Maximum Heart Rate Achieved"
            name="thalach"
            dark={dark}
            onChange={handleChange}
          />

          <SelectField
            label="Exercise Induced Angina"
            name="exang"
            dark={dark}
            onChange={handleNumberSelect}
            options={[
              { label: "No", value: 0 },
              { label: "Yes", value: 1 }
            ]}
          />

          <InputField
            label="ST Depression (Oldpeak)"
            name="oldpeak"
            step="0.1"
            dark={dark}
            onChange={handleChange}
          />

          <SelectField
            label="Slope of Peak Exercise ST Segment"
            name="slope"
            dark={dark}
            onChange={handleNumberSelect}
            options={[
              { label: "Upsloping", value: 0 },
              { label: "Flat", value: 1 },
              { label: "Downsloping", value: 2 }
            ]}
          />

          <SelectField
            label="Number of Major Vessels (0-3)"
            name="ca"
            dark={dark}
            onChange={handleNumberSelect}
            options={[
              { label: "0", value: 0 },
              { label: "1", value: 1 },
              { label: "2", value: 2 },
              { label: "3", value: 3 }
            ]}
          />

          <SelectField
            label="Thalassemia"
            name="thal"
            dark={dark}
            onChange={handleNumberSelect}
            options={[
              { label: "Normal", value: 1 },
              { label: "Fixed Defect", value: 2 },
              { label: "Reversible Defect", value: 3 }
            ]}
          />

        </div>
    );
}

export default AllInputs;