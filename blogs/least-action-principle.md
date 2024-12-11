# Least Action Principle

When I learned for the very first time about the Least Action Principle, I was amazed at how useful it was and how beautifully it compressed so much in a very simple equation, but at the same time I had a lot of questions on how it was derived and what it actually meant. So after thinking a lot for so many years, I have come to my own interpretation to which I feel comfortable with and I wanted to share it here.

## The traditional way

In a nutshell, this is how the least action principle is being taught from my perspective. Our natural world tries to minimize this quantity called "action". This minimization is mathematical expressed by the following formula.

$$\delta S = 0$$

Where the "action" is defined using the lagrangian $L$.
$$S = \int L(\dot{q}_i,q_i,t) dt$$

Using variational calculus, we can find the curve for $\vec{q} = \vec{q}(t)$ that minimizes this integral. This equation is also knows as **Euler-Lagrange Equation**.
$$\frac{\partial L}{\partial q_i} - \frac{d}{dt}(\frac{\partial L}{\partial \dot{q}_i}) = 0$$

Where the lagrangian $L$ is defined as follows using the kinetic energy $T$ and potential energy $V$:
$$L = T - V$$

### Sample

Let's apply this to a free particle of mass $m$ moving under the influence of a gravitational field ($\vec{g} = -g\hat{j}$). To make it simple, lets just consider that the particle will move in the $y$ axis.
Under this considerations, we can find that the kinetic energy and potential energy is as follows:
$$T = \frac{m\dot{y}^2}{2}$$

$$V = mgy$$

Then the lagrangian will be:
$$L = T - V = \frac{m\dot{y}^2}{2} - mgy$$

Plugin this lagrangian into the Euler-Lagrange equation will give us the following:
$$\frac{\partial L}{\partial y} - \frac{d}{dt}(\frac{\partial L}{\partial \dot{y}}) = 0$$
$$- mg -  \frac{d}{dt}(m\dot{y}) = 0$$
$$\ddot{y} = -g$$

This has given the exact same results that we obtained when using Newton's second law of motion.

$$F = ma$$

$$-mg = m\ddot{y}$$

$$\ddot{y} = -g$$

And this is how the Least Action Principle along with the Lagrangian and the Euler-Lagrange equation are presented. There is another approach to show these concepts that I find it more appealing. In this approach, the concept of virtual work and D'Alambert's principle ($\delta W  = (\vec{F}_{ext} - \frac{d\vec{p}}{dt}) \dot \delta r= 0$) are used to derived that Euler-Lagrange equation first, and from there the lagrangian is defined. From the Euler-Lagrange equation and the defined lagrangian, we infere that the quantity $S = \int L(\dot{q}_i,q_i,t) dt$ is being minimized and this quantity is called "action". So, in summary, this approach goes in the reverse way compare to the first approach.

## But, what is action?

## References

[1] [The Simple Math Problem That Revolutionized Physics](https://www.youtube.com/watch?v=Q10_srZ-pbs)
