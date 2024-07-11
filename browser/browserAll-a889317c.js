import { e as extensions, A as AccessibilitySystem, C as Container, a as accessibilityTarget, E as EventSystem, F as FederatedContainer } from "./index-fc1e813a.js";
import "./init-b679b4ed.js";
import "@rpgjs/common";
import "rxjs";
import "vue";
extensions.add(AccessibilitySystem);
Container.mixin(accessibilityTarget);
extensions.add(EventSystem);
Container.mixin(FederatedContainer);
