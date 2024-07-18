import React, { useEffect } from "react";
import Layout from "../layout/Layout";
import { useFormik } from "formik";
import { loginSchema } from "../schema";
import InputField from "../components/inputForm/InputField";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../store/appStore";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const { loginUser, user } = useAppStore();
  const navigate = useNavigate();
  const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: (values, action) => {
        loginUser(values, navigate);
      },
    });

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  return (
    <Layout>
      <section className="w-full h-screen flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-[550px] shadow-md p-8 sm:p-10 rounded-2xl bg-white"
        >
          <h2 className="font-extrabold text-2xl tracking-tight mb-6 text-center text-gray-900">
            Login
          </h2>

          <p className="text-center mb-6 text-gray-700">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-blue-500 underline cursor-pointer"
            >
              Get Started
            </span>
          </p>

          <InputField
            handleChange={handleChange}
            name={"email"}
            title={"Email"}
            type={"email"}
            value={values.email}
            errors={errors}
            touched={touched}
            handleBlur={handleBlur}
            className="mb-4"
          />
          <InputField
            handleChange={handleChange}
            name={"password"}
            title={"Password"}
            type={"password"}
            value={values.password}
            errors={errors}
            touched={touched}
            handleBlur={handleBlur}
            className="mb-4"
          />
          <h2
            className="text-blue-500 text-right mb-6 underline cursor-pointer"
            onClick={() => navigate("/forgot-password")}
          >
            Forgot Password?
          </h2>

          <button
            type="submit"
            className="text-lg bg-purple-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md w-full"
          >
            Login
          </button>
        </form>
      </section>
    </Layout>
  );
};

export default Login;
