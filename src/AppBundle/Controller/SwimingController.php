<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Swiming;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;use Symfony\Component\HttpFoundation\Request;

/**
 * Swiming controller.
 *
 * @Route("swiming")
 */
class SwimingController extends Controller
{
    /**
     * Lists all swiming entities.
     *
     * @Route("/", name="swiming_index")
     * @Method("GET")
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $swimings = $em->getRepository('AppBundle:Swiming')->findAll();

        return $this->render('swiming/index.html.twig', array(
            'swimings' => $swimings,
        ));
    }

    /**
     * Creates a new swiming entity.
     *
     * @Route("/new", name="swiming_new")
     * @Method({"GET", "POST"})
     */
    public function newAction(Request $request)
    {
        $swiming = new Swiming();
        $form = $this->createForm('AppBundle\Form\SwimingType', $swiming);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($swiming);
            $em->flush();

            return $this->redirectToRoute('swiming_show', array('id' => $swiming->getId()));
        }

        return $this->render('swiming/new.html.twig', array(
            'swiming' => $swiming,
            'form' => $form->createView(),
        ));
    }

    /**
     * Finds and displays a swiming entity.
     *
     * @Route("/show/{id}", name="swiming_show")
     * @Method("GET")
     */
    public function showAction(Swiming $swiming)
    {
        $deleteForm = $this->createDeleteForm($swiming);

        return $this->render('swiming/show.html.twig', array(
            'swiming' => $swiming,
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing swiming entity.
     *
     * @Route("/edit/{id}", name="swiming_edit")
     * @Method({"GET", "POST"})
     */
    public function editAction(Request $request, Swiming $swiming)
    {
        $deleteForm = $this->createDeleteForm($swiming);
        $editForm = $this->createForm('AppBundle\Form\SwimingType', $swiming);
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('swiming_edit', array('id' => $swiming->getId()));
        }

        return $this->render('swiming/edit.html.twig', array(
            'swiming' => $swiming,
            'edit_form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Deletes a swiming entity.
     *
     * @Route("/{id}", name="swiming_delete")
     * @Method("DELETE")
     */
    public function deleteAction(Request $request, Swiming $swiming)
    {
        $form = $this->createDeleteForm($swiming);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($swiming);
            $em->flush();
        }

        return $this->redirectToRoute('swiming_index');
    }

    /**
     * Creates a form to delete a swiming entity.
     *
     * @param Swiming $swiming The swiming entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm(Swiming $swiming)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('swiming_delete', array('id' => $swiming->getId())))
            ->setMethod('DELETE')
            ->getForm()
        ;
    }
}
