import express from "express";
import { UserRoutes } from "../modules/User/User.routes";
import { AdminAnalyticesRoutes } from "../modules/AdminAnalytices/AdminAnalytice.routes";
import { AuthRoutes } from "../modules/Auth/auth.routes";
import { PaymentRoutes } from "../modules/Payment/Payment.routes";
import { ReviewRoutes } from "../modules/Review/Review.routes";
import { CommentRoutes } from "../modules/Comment/Comment.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/user",
    route: UserRoutes,
  },
  {
    path: "/payment",
    route: PaymentRoutes,
  },
  {
    path: "/review",
    route: ReviewRoutes,
  },
  {
    path: "/admin",
    route: AdminAnalyticesRoutes,
  },
  {
    path: "/comment",
    route: CommentRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
