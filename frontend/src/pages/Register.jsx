import React, { useEffect } from "react";
import Layout from "../layout/Layout";
import { useFormik } from "formik";
import { registerSchema } from "../schema";
import InputField from "../components/inputForm/InputField";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../store/appStore";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const { registerUser, user } = useAppStore();
  const navigate = useNavigate();
  const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: registerSchema,
      onSubmit: (values, action) => {
        registerUser(values, navigate);
      },
    });

  const formValues = [
    { name: "name", title: "Name", type: "text", value: values.name },
    { name: "email", title: "Email", type: "email", value: values.email },
    {
      name: "password",
      title: "Password",
      type: "password",
      value: values.password,
    },
    {
      name: "confirmPassword",
      title: "Confirm password",
      type: "password",
      value: values.confirmPassword,
    },
  ];

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  return (
    <Layout>
      <section className="w-full min-h-screen flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 sm:p-10 space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 tracking-wider">
            Get Started
          </h2>
          <p className="text-center text-gray-600">
            Already have an account?{" "}
            <span className="border-[1px] bg-blue-900 border-gray-300 px-4 py-2 inline-block">
            <button
              onClick={() => navigate("/login")}
              className="text-white-500 underline hover:text-white-700 focus:outline-none"
            >
              <div className="text-white">Login</div>
              
            </button>
            </span>
          </p>
          {formValues.map((item, id) => (
            <div key={id}>
              <label
                htmlFor={item.name}
                className="block text-xl font-medium text-gray-700"
              >
                {item.title}
              </label>
              <InputField
                handleChange={handleChange}
                name={item.name}
                type={item.type}
                value={item.value}
                errors={errors}
                touched={touched}
                handleBlur={handleBlur}
                className="mt-1 block w-full px-3 py-2 border-[1px] border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition duration-300"
          >
          
              Register
            
          </button>
        </form>
      </section>
    </Layout>
  );
};

export default Register;
